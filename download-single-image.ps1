# Create directory if it doesn't exist
$destination = "public/assets/portfolio/commercial"
if (!(Test-Path -Path $destination)) {
    New-Item -ItemType Directory -Force -Path $destination
}

# Download a single image
$imageNumber = 1
$imageUrl = "https://i.ibb.co/2yQ7qj4/IMG-20240915-212500-$imageNumber.jpg"
$outputPath = "$destination/IMG-20240915-212500-$imageNumber.jpg"

try {
    Invoke-WebRequest -Uri $imageUrl -OutFile $outputPath -UseBasicParsing
    Write-Host "Successfully downloaded: $outputPath"
}
catch {
    Write-Host "Failed to download image: $_" -ForegroundColor Red
}
