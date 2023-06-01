# GoLand

## Go语言环境安装配置
1. 下载地址：https://golang.google.cn/dl/ ，下载后安装到指定目录
2. `win+R` 输入 `cmd`打开命令行窗口，输入 `go version`可以查看当前Go的版本
3. 配置环境变量：右键此电脑$\rightarrow$属性$\rightarrow$高级系统设置$\rightarrow$环境变量：
   
   1. 新建系统变量`GOROOT`对应Go安装路径
   2. 新建系统变量`GOPATH`对应Go项目路径
   3. 编辑系统变量中的Path，新建`%GOROOT%\bin`
   4. `win+R` 输入 `cmd`打开命令行窗口，输入 `go env`可以查看当前Go的环境配置信息
   5. 命令行中运行go文件，`go run ***.go`


## GoLand下载安装
1. 下载地址：https://www.jetbrains.com/go/download/#section=windows