$url = "https://i.ibb.co/2yQ7qj4/IMG-20240915-212500-1.jpg"
$output = "$PSScriptRoot\luxury-interior.jpg"

# Create directory if it doesn't exist
$directory = [System.IO.Path]::GetDirectoryName($output)
if (!(Test-Path $directory)) {
    New-Item -ItemType Directory -Force -Path $directory
}

# Download the file
Invoke-WebRequest -Uri $url -OutFile $output -UseBasicParsing

Write-Host "Image downloaded to: $output"
