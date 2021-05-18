import React, { Component } from 'react';
import ArticleList from '../components/app/articles/ArticleList';
import Search from '../components/app/articles/Search';
import { fetchNewsArticles, fetchNewsBySearch } from '../services/newsApi';

export default class NewsSearch extends Component {
  state = {
    loading: true,
    articles: [],
    queryParams: '',
  };

  async componentDidMount() {
    const articles = await fetchNewsArticles();
    this.setState({
      loading: false,
      articles,
    });
  }

  handleQueryParamsChange = ({ target }) => {
    this.setState({ queryParams: target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    this.setState({ loading: true });
    const articles = await fetchNewsBySearch(this.state.queryParams);
    this.setState({
      loading: false,
      articles,
    });
  };

  render() {
    const { loading, articles, queryParams } = this.state;
    if (loading) return <h1>Loading...</h1>;
    return (
      <>
        <Search
          queryParams={queryParams}
          onQueryParamsChange={this.handleQueryParamsChange}
          onSubmit={this.handleSubmit}
        />
        <ArticleList articles={articles} />
      </>
    );
  }
}
