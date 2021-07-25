import React, { useContext } from 'react';
import { Link } from 'gatsby';
import Tags from '../tags';
import { ThemeContext } from '../../../providers/ThemeProvider';
import { 
    StyledPostList, 
    StyledPostListItem,
    PostListTitle,
    PostListExcerpt,
    PostListMeta,
} from './styles';

const PostList = ({ posts }) => {

  const PostList = posts.map(({ frontmatter, fields, excerpt, timeToRead }) => {
    const { title, tags, date, description } = frontmatter;
    const { slug } = fields;

    return (
      <PostListItem
        key={slug}
        tags={tags}
        title={title}
        date={date}
        slug={slug}
        timeToRead={timeToRead}
        description={description}
        excerpt={excerpt}
      />
    );
  });

  return <StyledPostList>{PostList}</StyledPostList>;
};

export default PostList;

const PostListItem = ({
  title,
  date,
  timeToRead,
  tags,
  excerpt,
  description,
  slug,
}) => {

  const { theme } = useContext(ThemeContext);
  
  return (
    <StyledPostListItem theme={theme} >
      <Tags tags={tags} />

      <PostListTitle>
        <Link to={slug}>{title}</Link>
      </PostListTitle>
      <PostListExcerpt
        dangerouslySetInnerHTML={{
          __html: description || excerpt,
        }}
      />
      <PostListMeta>
        <span>{date}</span>

        <span>{timeToRead} mins</span>
      </PostListMeta>
    </StyledPostListItem>
  );
};