import React, { Fragment } from 'react'
import { Pagination, Empty } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import TplOne from './tplOne'
import TplTwo from './tplTwo'
import './index.less'
// UNSAFE_componentWillReceiveProps(nextProps) {
//   let { pathname: nextPathname, state } = nextProps.location
//   let { pathname: currentPathname } = this.props.location
//   if (nextPathname !== currentPathname) {
//       state = state || {}
//       let { tagName, categoryName } = state
//       this.getArticles({ tagName, categoryName });
//   }
// }
const Archive = props => {
  const { articleList, pager } = useSelector(
    state => state.article.articleListData
  )
  const { loading } = useSelector(state => state.common)
  const dispatch = useDispatch()
  const getArticles = params => {
    let { location } = props
    let state = location.state || {}
    let { tagName, categoryName } = state
    dispatch({
      type: 'AsyncArticleList',
      data: {
        tagName,
        categoryName,
        attributes: 'id,title,createdAt',
        ...params
      }
    })
  }
  const onChange = currentPage => {
    getArticles({ currentPage })
  }

  let { location } = props
  let { currentPage, pageSize, total } = pager
  let { pathname } = location
  let Tpl = () =>
    /arrange/.test(pathname) ? (
      <TplOne total={total} data={articleList} />
    ) : (
      <TplTwo data={articleList} />
    )
  return (
    <div className="arrange-container">
      {loading ? null : articleList.length ? (
        <Fragment>
          <Tpl />
          <Pagination
            style={{ textAlign: 'right' }}
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

export default Archive
