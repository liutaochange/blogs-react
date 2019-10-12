import React, { Component } from 'react'
import { Input } from 'antd'
import { useDispatch } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getArticleList } from '@/store/article/action'
const Search = props => {
  const onSearch = value => {
    const { history } = props
    const dispatch = useDispatch()
    dispatch(getArticleList({ keyword: value }))
    history.push({
      pathname: '/article',
      search: 'keyword=' + value
    })
  }
  const getKeyWord = () => {
    let { search } = props.location
    let keyword = ''
    if (search) {
      let obj = search.substring(1)
      keyword = obj['keyword']
    }
    return keyword
  }
  return (
    <div className="search">
      <Input.Search
        placeholder="搜索文章"
        onSearch={() => {
          onSearch
        }}
        defaultValue={() => {
          getKeyWord()
        }}
        style={{ width: '80%' }}
      />
    </div>
  )
}

export default withRouter(Search)
