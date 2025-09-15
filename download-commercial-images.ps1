# Create directory if it doesn't exist
$destination = "public/assets/portfolio/commercial"
if (!(Test-Path -Path $destination)) {
    New-Item -ItemType Directory -Force -Path $destination
}

# Base URL for the images
$baseUrl = "https://i.ibb.co/"

# Array of image paths from the URL
$imagePaths = @(
    "2yQ7qj4/IMG-20240915-212500-1.jpg",
    "2yQ7qj4/IMG-20240915-212500-2.jpg",
    "2yQ7qj4/IMG-20240915-212500-3.jpg",
    "2yQ7qj4/IMG-20240915-212500-4.jpg",
    "2yQ7qj4/IMG-20240915-212500-5.jpg",
    "2yQ7qj4/IMG-20240915-212500-6.jpg",
    "2yQ7qj4/IMG-20240915-212500-7.jpg",
    "2yQ7qj4/IMG-20240915-212500-8.jpg",
    "2yQ7qj4/IMG-20240915-212500-9.jpg",
    "2yQ7qj4/IMG-20240915-212500-10.jpg",
    "2yQ7qj4/IMG-20240915-212500-11.jpg",
    "2yQ7qj4/IMG-20240915-212500-12.jpg",
    "2yQ7qj4/IMG-20240915-212500-13.jpg",
    "2yQ7qj4/IMG-20240915-212500-14.jpg",
    "2yQ7qj4/IMG-20240915-212500-15.jpg",
    "2yQ7qj4/IMG-20240915-212500-16.jpg",
    "2yQ7qj4/IMG-20240915-212500-17.jpg",
    "2yQ7qj4/IMG-20240915-212500-18.jpg",
    "2yQ7qj4/IMG-20240915-212500-19.jpg",
    "2yQ7qj4/IMG-20240915-212500-20.jpg",
    "2yQ7qj4/IMG-20240915-212500-21.jpg",
    "2yQ7qj4/IMG-20240915-212500-22.jpg",
    "2yQ7qj4/IMG-20240915-212500-23.jpg",
    "2yQ7qj4/IMG-20240915-212500-24.jpg",
    "2yQ7qj4/IMG-20240915-212500-25.jpg",
    "2yQ7qj4/IMG-20240915-212500-26.jpg"
)

# Download each image
for ($i = 0; $i -lt $imagePaths.Count; $i++) {
    $imageNumber = $i + 1
    $imageUrl = $baseUrl + $imagePaths[$i]
    $outputPath = "$destination/IMG-20240915-212500-$imageNumber.jpg"
    
    Write-Host "Downloading image $imageNumber of $($imagePaths.Count)..."
    
    try {
        Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath -UseBasicParsing
        Write-Host "Successfully downloaded: $outputPath"
    }
    catch {
        Write-Host "Failed to download image $imageNumber: $_" -ForegroundColor Red
    }
}

Write-Host "All downloads completed!"
