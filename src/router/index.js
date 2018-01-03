import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Footer from '@/components/Footer';
import Cart from '@/components/Cart';
import CartHeader from '@/components/CartHeader';
import Imgs from '@/components/Imgs';
import ImgsHeader from '@/components/ImgsHeader';
import Print from '@/components/Print';
//import PrintHeader from '@/components/PrintHeader';
import User from '@/components/User';
import UserHeader from '@/components/UserHeader';
import Home from '@/components/Home';
import HomeHeader from '@/components/HomeHeader';
import Home2 from"@/components/Home2";
import Home3 from"@/components/Home3";
import Home4 from"@/components/Home4";
import Detail from"@/components/Detail";
import DetailHeader from"@/components/DetailHeader";
//import DetailFooter from"@/components/DetailFooter";
import List_Home4 from "@/components/List_Home4";
import Login01 from "@/components/Login01";
import Login02 from "@/components/Login02";
import Login03 from "@/components/Login03";
import Register from "@/components/Register";
import Logout from "@/components/Logout";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
     redirect:"/home"
    },
    {
    	path:"/home",
    	name:"home",
    	components:{
    		header:HomeHeader,
    		content:Home,
    		footer:Footer
    	}
    },
    {
    	path:"/home2",
    	name:"home2",
    	components:{
    		header:HomeHeader,
    		content:Home2,
    		footer:Footer
    	}
    },
    {
    	path:"/home3",
    	name:"home3",
    	components:{
    		header:HomeHeader,
    		content:Home3,
    		footer:Footer
    	}
    },
    {
    	path:"/home4",
    	name:"home4",
    	components:{
    		header:HomeHeader,
    		content:Home4,
    		footer:Footer
    	}
    },
    {
    	path:"/cart",
    	name:"cart",
    	components:{
    		header:CartHeader,
    		content:Cart
    	}
    },
    {
    	path:"/imgs",
    	name:"imgs",
    	components:{
    		header:ImgsHeader,
    		content:Imgs,
    		footer:Footer
    	}
    },
    {
    	path:"/print",
    	name:"print",
    	components:{
//  		header:PrintHeader,
    		content:Print,
    		footer:Footer
    	}
    },
    {
    	path:"/user",
    	name:"user",
    	components:{
    		header:UserHeader,
    		content:User,
    		footer:Footer
    	}
    },
    {
    	path:"/detail/:goodsID",
    	name:"detail",
    	components:{
    		header:DetailHeader,
    		content:Detail
    	}
    },
    {
    	path:"/list_Home4/:activeID",
    	name:"list_Home4",
    	components:{
    		header:DetailHeader,
    		content:List_Home4
    	}
    },
    {
    	path:"/login01",
    	name:"login01",
    	components:{
    		content:Login01
    	}
    },
    {
    	path:"/login02",
    	name:"login02",
    	components:{
    		content:Login02
    	}
    },
    {
    	path:"/login03",
    	name:"login03",
    	components:{
    		content:Login03
    	}
    },
    {
    	path:"/register",
    	name:"register",
    	components:{
    		content:Register
    	}
    },
    {
    	path:"/logout",
    	name:"logout",
    	components:{
    		content:Logout
    	}
    }
    
  ]
})
