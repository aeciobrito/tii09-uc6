for ($i = 1; $i -le 28; $i++) {                   
    $folderName = $i.ToString().PadLeft(2, '0')
    $folderPath = Join-Path -Path . -ChildPath $folderName
    New-Item -ItemType Directory -Path $folderPath -Force

    $filePath = Join-Path -Path $folderPath -ChildPath "script.js"
    New-Item -ItemType File -Path $filePath -Force

    $filePath = Join-Path -Path $folderPath -ChildPath "index.html"
    New-Item -ItemType File -Path $filePath -Force

    $filePath = Join-Path -Path $folderPath -ChildPath "playground.html"
    New-Item -ItemType File -Path $filePath -Force

    $filePath = Join-Path -Path $folderPath -ChildPath "atividade"
    New-Item -ItemType Directory -Path $filePath -Force
}


for ($i = 1; $i -le 28; $i++) {
    $folderName = $i.ToString().PadLeft(2, '0')
    $folderPath = Join-Path -Path . -ChildPath $folderName
    New-Item -ItemType Directory -Path $folderPath -Force

    # Create files in the main folder
    New-Item -ItemType File -Path (Join-Path -Path $folderPath -ChildPath "script.js") -Force
    New-Item -ItemType File -Path (Join-Path -Path $folderPath -ChildPath "index.html") -Force
    New-Item -ItemType File -Path (Join-Path -Path $folderPath -ChildPath "playground.html") -Force

    # Create the "atividade" subfolder and its file
    $atividadePath = Join-Path -Path $folderPath -ChildPath "atividade"
    New-Item -ItemType Directory -Path $atividadePath -Force
    New-Item -ItemType File -Path (Join-Path -Path $atividadePath -ChildPath "atividade.html") -Force
}