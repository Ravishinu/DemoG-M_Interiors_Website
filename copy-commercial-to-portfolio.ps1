# Source and destination paths
$sourceDir = "public\Commercial"
$destDir = "public\assets\portfolio\all"

# Create destination directory if it doesn't exist
if (-not (Test-Path -Path $destDir)) {
    New-Item -ItemType Directory -Path $destDir -Force
    Write-Host "Created directory: $destDir"
}

# Get all files from source directory
$files = Get-ChildItem -Path $sourceDir -File

# Copy each file to destination
foreach ($file in $files) {
    $destPath = Join-Path -Path $destDir -ChildPath $file.Name
    Copy-Item -Path $file.FullName -Destination $destPath -Force
    Write-Host "Copied: $($file.Name) to $destPath"
}

Write-Host "`nAll commercial photos have been copied to portfolio/all directory."
Write-Host "Total files copied: $($files.Count)"
