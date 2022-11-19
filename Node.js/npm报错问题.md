### npm ERR! Could not resolve dependency:npm ERR! peer pug@“^2.0.0“ from pug-loader@2.4.0
### npm ERR! Could not resolve dependency:npm ERR! peer pug@“^2.0.0” from pug-loader@2.4.0
  
### 报错原因
在新版本的npm中，默认情况下，npm install遇到冲突的peerDependencies时将失败。

### 解决办法
使用–force或–legacy-peer-deps可解决这种情况。  
  
–force 会无视冲突，并强制获取远端npm库资源，当有资源冲突时覆盖掉原先的版本。
–legacy-peer-deps：安装时忽略所有peerDependencies，忽视依赖冲突，采用npm版本4到版本6的样式去安装依赖，已有的依赖不会覆盖。
建议用–legacy-peer-deps 比较保险一点

在终端重新安装即可解决
`npm install --legacy-peer-deps`
