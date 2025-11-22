$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add('http://+:8080/')
$listener.Start()
Write-Host "服务器已启动，监听 http://+:8080"

while ($listener.IsListening) {
    $context = $listener.GetContext()
    $request = $context.Request
    $response = $context.Response
    
    # 处理根路径，返回index.html
    $filePath = Join-Path (Get-Location) ($request.Url.LocalPath.TrimStart('/'))
    
    if ([string]::IsNullOrEmpty($request.Url.LocalPath) -or $request.Url.LocalPath -eq '/') {
        $filePath = Join-Path (Get-Location) 'index.html'
    }
    
    # 检查文件是否存在并返回内容
    if (Test-Path $filePath -PathType Leaf) {
        try {
            $content = [System.IO.File]::ReadAllBytes($filePath)
            $response.ContentLength64 = $content.Length
            
            # 设置正确的Content-Type
            if ($filePath -match '\.html$') {
                $response.ContentType = 'text/html; charset=utf-8'
            } elseif ($filePath -match '\.js$') {
                $response.ContentType = 'application/javascript; charset=utf-8'
            } elseif ($filePath -match '\.css$') {
                $response.ContentType = 'text/css; charset=utf-8'
            }
            
            $response.OutputStream.Write($content, 0, $content.Length)
        } catch {
            $response.StatusCode = 500
            Write-Host "文件读取错误: $_"
        }
    } else {
        $response.StatusCode = 404
        Write-Host "文件未找到: $filePath"
    }
    
    $response.Close()
}