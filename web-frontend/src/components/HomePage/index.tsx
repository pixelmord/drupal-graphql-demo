import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';

export const ARTICLE_FRAGMENT = gql`
  fragment Article on NodeArticle {
    entityId
    title
    body {
      processed
    }
    fieldTags {
      entity {
        name
      }
    }
    fieldImage {
      url
    }
  }
`;

export const ARTICLE_PROMOTED_QUERY = gql`
  query promotedArticles {
    nodeQuery(
      offset: 0
      limit: 10
      filter: {
        conditions: [
          { field: "status", value: ["1"], operator: EQUAL }
          { field: "promote", value: ["1"], operator: EQUAL }
        ]
      }
    ) {
      entities {
        ...Article
      }
    }
  }
  ${ARTICLE_FRAGMENT}
`;

export interface Article {
  entityId: string;
  title: string;
}

export interface ArticleResponse extends QueryProps {
  nodeQuery: {
    entities: Article[];
  };
}

const withPromotedArticles = graphql<ArticleResponse>(ARTICLE_PROMOTED_QUERY, {
  name: 'promotedArticles',
});

interface Props {
  promotedArticles: ArticleResponse;
}
const HomePage: React.SFC<Props> = ({ promotedArticles }) => {
  const { error, loading } = promotedArticles;
  if (loading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error</div>;
  }
  const { nodeQuery: { entities: articles } } = promotedArticles;
  return (
    <div>
      {articles.map(article => (
        <div key={article.entityId}>{article.title}</div>
      ))}
    </div>
  );
};

export default withPromotedArticles(HomePage as any);
