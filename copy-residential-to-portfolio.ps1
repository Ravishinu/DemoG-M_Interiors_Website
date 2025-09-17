# Create destination directory if it doesn't exist
$destination = "public/assets/portfolio/residential"
if (!(Test-Path -Path $destination)) {
    New-Item -ItemType Directory -Force -Path $destination
}

# Source directory for residential images
$sourceDir = "public/Residential"

# Get all image files from the source directory
$imageFiles = Get-ChildItem -Path $sourceDir -Filter *.jpg

# Copy each image to the destination directory
foreach ($image in $imageFiles) {
    $destinationPath = Join-Path -Path $destination -ChildPath $image.Name
    try {
        Copy-Item -Path $image.FullName -Destination $destinationPath -Force
        Write-Host "Copied: $($image.Name) to $destinationPath"
    }
    catch {
        Write-Host "Failed to copy $($image.Name): $_"
    }
}

Write-Host "`nCopy operation completed. Copied $($imageFiles.Count) images to $destination"
