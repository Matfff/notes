# git错误 error: failed to push some refs to ‘https://github.com/...#
问题原因：远程库与本地库不一致造成的，在hint中也有提示把远程库同步到本地库就可以了。  
解决办法：使用命令行：git pull --rebase origin master  
该命令的意思是把远程库中的更新合并到（pull=fetch+merge）本地库中，–-rebase的作用是取消掉本地库中刚刚的commit，并把他们接到更新后的版本库之中。  
pull执行成功后，可以成功执行git push -u origin master操作。
