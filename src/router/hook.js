
import User from "@/api/user.js"
// 全局前置守卫

const beforeEach = async (to, from, next) => {
  // 判断是否需要调用接口
  // if (to.meta.requiresApiCall) {
  //   try {
  //     // 调用接口获取状态字段的值
  //     const response = await User.getUserContract({userId:JSON.parse(window.localStorage.getItem('userInfo')).userId })
  //     const state = response.data // 假设状态字段为 state
      
  //     // 根据状态字段的值来决定导航
  //     if (state!=='该用户没有借款合同') {
  //       next({path:'/particulars'}) // 导航到目标路由
        
  //     } else {
  //       next() // 导航到其他路由
  //     }
  //   } catch (error) {
  //     console.error('Failed to fetch state:', error)
  //     next() // 发生错误时，放行
  //   }
  // } else {
  //   next() // 不需要调用接口时，直接放行
  // }
  next()
};

// 全局解析守卫
const beforeResolve = (to, from, next) => {
  next();
};

// 全局后置守卫
const afterEach = () => {};

export { afterEach, beforeEach, beforeResolve };
