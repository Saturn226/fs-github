import {getRepos} from './index.js'

describe('#getRepos()', () => {
  it('is defined', () =>{
    expect(getRepos).not.toBe(undefined)
  })

  it('should load user data', () => {
    getRepos("saturn226") // my repo
      .then(data => {
        expect(data).toBeDefined
        expect(data.name).toBe("Ashley")
      })
  })
})

// describe('#renderResult', () =>{
//   it('is defined', ()=>{
//     expect(renderResult).not.toBe(undefined)
//   })
// })