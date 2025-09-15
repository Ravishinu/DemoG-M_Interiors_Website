# Create directories for each category
$baseDir = "./public/assets/portfolio"
$categories = @("residential", "commercial", "restaurant")

# Subcategories mapping with search terms
# Format: @{ Category = @{ Subcategory = "search term" }}
$subcategoryMap = @{
    "residential" = @{
        "False Ceiling Design" = "modern false ceiling design living room"
        "Bedroom Wardrobe" = "modern bedroom wardrobe design"
        "Modular Kitchen" = "contemporary modular kitchen design"
        "Dining Partition" = "modern dining room partition design"
        "Pooja Room" = "modern pooja room design home"
        "Restroom Variety Box" = "bathroom storage cabinet modern"
        "Texture / Wallpaper" = "modern textured accent wall living room"
    }
    
    "commercial" = @{
        "Party Unit" = "modern bar counter design office"
        "Pooja Room" = "corporate pooja room design"
        "False Ceiling Design" = "office false ceiling design"
        "Texture / Wallpaper" = "office wall texture design"
    }
    
    "restaurant" = @{
        "Kitchen Unit" = "restaurant kitchen design modern"
        "Partition Units" = "restaurant partition design modern"
        "False Ceiling" = "restaurant ceiling design"
        "Furniture Works" = "restaurant furniture design"
        "Texture / Wallpaper" = "restaurant wall design modern"
    }
}

# Create category directories if they don't exist
foreach ($category in $categories) {
    $dir = "$baseDir/$category"
    if (-not (Test-Path $dir)) {
        New-Item -ItemType Directory -Path $dir -Force | Out-Null
    }
}

# Function to download image
function Download-Image {
    param (
        [string]$searchTerm,
        [string]$outputPath
    )
    
    $searchTerm = [uri]::EscapeDataString($searchTerm)
    $url = "https://source.unsplash.com/random/800x600/?$searchTerm"
    
    try {
        Invoke-WebRequest -Uri $url -OutFile $outputPath -ErrorAction Stop
        Write-Host "Downloaded: $outputPath"
        return $true
    }
    catch {
        Write-Host "Failed to download: $outputPath - $_"
        return $false
    }
}

# Download images for each subcategory
foreach ($category in $categories) {
    # Skip if category not in our map
    if (-not $subcategoryMap.ContainsKey($category)) { continue }
    
    $subcategories = $subcategoryMap[$category].Keys
    
    foreach ($subcategory in $subcategories) {
        $safeSubcategory = $subcategory -replace '[\\/:*?"<>|]', '_'
        $dir = "$baseDir/$category/$safeSubcategory"
        
        # Create subcategory directory
        if (-not (Test-Path $dir)) {
            New-Item -ItemType Directory -Path $dir -Force | Out-Null
        }
        
        # Download 4 images per subcategory
        for ($i = 1; $i -le 4; $i++) {
            $outputFile = "$dir/$($category.Substring(0,1))_$($safeSubcategory.Replace(' ', '_'))_$i.jpg"
            $searchTerm = $subcategoryMap[$category][$subcategory]
            
            # Only download if file doesn't exist
            if (-not (Test-Path $outputFile)) {
                $success = Download-Image -searchTerm $searchTerm -outputPath $outputFile
                if (-not $success) {
                    # If download fails, create an empty file to avoid retrying
                    New-Item -ItemType File -Path $outputFile -Force | Out-Null
                }
                # Add delay to avoid rate limiting
                Start-Sleep -Milliseconds 500
            }
        }
    }
}

Write-Host "Image download completed!"
