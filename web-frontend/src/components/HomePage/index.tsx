import * as React from 'react';
import { graphql, QueryProps } from 'react-apollo';
import gql from 'graphql-tag';
import { Card, Image } from 'semantic-ui-react';

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
  body: {
    processed: string;
  };
  fieldTags: {
    entity: {
      name: string;
    };
  };
  fieldImage: {
    url: string;
  };
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
    <Card.Group itemsPerRow={2}>
      {articles.map(article => (
        <Card key={article.entityId}>
          <Image src={article.fieldImage.url} />
          <Card.Content>
            <Card.Header>{article.title}</Card.Header>
            <Card.Description
              dangerouslySetInnerHTML={{ __html: article.body.processed }}
            />
          </Card.Content>

          <Card.Content extra={true}>
            {article.fieldTags[0].entity.name}
          </Card.Content>
        </Card>
      ))}
    </Card.Group>
  );
};

export default withPromotedArticles(HomePage as any);
