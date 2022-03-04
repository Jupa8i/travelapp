import Vue from 'vue'
export const state = () => ({
  options: null

})

export const actions = {
  getOptions(context){
    let url = '/options'

    return this.$axios.post(url).then(res => {
      console.log(res)
      let options = res.data
      context.commit('setOptions', options)
      return res.data
    }).catch((error) => {
      console.log(error.response)
      return error.response
    })
  }


}

export const mutations = {

  setOptions(state, options){
    state.options = options
  },

}

export const getters = {
  options(state) {
    return state.options
  },

}


