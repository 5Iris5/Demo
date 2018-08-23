
$$('.model .login').forEachfunction (selector){
     return document.querySelector(selector)
}
//实现切换功能
function $$(selector){
        return document.querySelectorAll(selector)
}(function(node){
     node.onclick = function(){
            $('.flip-model').classList.remove('register')
            $('.flip-model').classList.add('login')
    }
})
$$('.model .register').forEach(function(node){
 node.onclick = function(){
  $('.flip-model').classList.remove('login')
  $('.flip-model').classList.add('register')
}
})
//		$('.model .login').onclick = function(){
//			$('.flip-model').classList.remove('register')
//			$('.flip-model').classList.add('login')
//		}
//		$('.model .register').onclick = function(){
//			$('.flip-model').classList.remove('login')
//			$('.flip-model').classList.add('register')
//		}

        //鼠标点击右上角图标时登录页面展现
//        $('header .login').onclick = function(){
//        	$('.flip-model').classList.add('show')
//        }classList用于复杂效果
$('header .login').onclick = function(e){
        	e.stopPropagation()  //鼠标点击右上角图标时登录页面展现
        	$('.flip-model').style.display = 'block'
        }//style用于一次点击

//鼠标点击×与其他区域时登录页面隐藏
$('.flip-model').addEventListener('click',function(e){
                e.stopPropagation()  //阻止事件传播——防止点击modal本身时隐藏
                if(e.target.classList.contains('login')){
                        $('.flip-model').classList.remove('register')
                        $('.flip-model').classList.add('login')
                }
                if(e.target.classList.contains('register')){
                        $('.flip-model').classList.add('register')
                        $('.flip-model').classList.remove('login')
                }
                console.log(e.target)
                console.log(this)
                window.target = e.target
                if(e.target.classList.contains('close')){
                        $('.flip-model').style.display = 'none'
                }//鼠标点击×时登录页面隐藏
        })
document.addEventListener('click',function(){
       $('.flip-model').style.display = 'none'
})

//正则表达式检测输入的数据是否合理
$('.model-login form').addEventListener('submit',function(e){
                e.preventDefault() //阻止表单自动提交
                if(!/^\w{3,8}$/.test($('.model-login input[name="username"]').value)){
                        $('.model-login .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
                        return false
                }
                if(!/^\w{6,10}$/.test($('.model-login input[name="password"]').value)){
                        $('.model-login .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
                        return false
                }
                this.submit()
        })
$('.model-register form').addEventListener('submit',function(e){
               e.preventDefault()
               if(!/^\w{3,8}$/.test($('.model-register input[name="username"]').value)){
                      $('.model-register .errormsg').innerText = '用户名需输入3-8个字符，包括字母数字下划线'
                      return false
              }
              if(!/^Iris$|^Long$/.test($('.model-register input[name="username"]').value)){
                      $('.medol-register .errormsg').innerText = '用户名已存在'
                      return false
              }
              if(!/^w{6,10}$/.test($('.model-register input[name="password"]').value)){
                      $('model-register .errormsg').innerText = '密码需输入6-10个字符，包括字母数字下划线'
                      return false
              }
              if($('.model-register input[name="password"]').value !==$('.model-register input[name="password2"]').value){
                      $('model-register .errormsg').innerText = '两次密码输入不一致，请重新输入'
                      return false
              }
              this.submit()
        })
