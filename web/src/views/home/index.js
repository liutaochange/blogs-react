import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import ArticleList from '@/components/articleList/index'
import { Pagination, Empty } from 'antd'

const Home = props => {
  const dispatch = useDispatch()
  const onChange = currentPage => {
    let { history } = props
    let keyword = getKeyWord()
    history.push({
      pathname: '/article',
      search:
        (keyword ? 'keyword=' + keyword + '&' : '') +
        'currentPage=' +
        currentPage
    })
    dispatch({ keyword, currentPage })
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
  useEffect(() => {
    let { search } = props.location
    let params = search.substring(1)
    dispatch(params)
  }, [])
  const { articleList, pager } = useSelector(
    state => state.article.articleListData
  )
  const { loading } = useSelector(state => state.article)
  let { currentPage, pageSize, total } = pager
  return (
    <div className="home-container" style={{ margin: '0px 26px' }}>
      {loading ? null : articleList.length ? (
        <Fragment>
          <ArticleList data={articleList}></ArticleList>
          <Pagination
            style={{ textAlign: 'right', marginBottom: 22 }}
            current={currentPage}
            pageSize={pageSize}
            total={total}
            onChange={onChange}
          />
        </Fragment>
      ) : (
        <Empty description="暂无数据" imageStyle={{ marginTop: '145px' }} />
      )}
    </div>
  )
}

export default Home
