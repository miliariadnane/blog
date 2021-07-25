import React, { useContext } from 'react';
import { Link } from "gatsby";
import { ThemeContext } from '../../../providers/ThemeProvider';
import { Tag } from './styles';

const toKebabCase = (str) => {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join('-');
};

const Tags = ({ tags }) => {

  const { theme } = useContext(ThemeContext);

  return (
    <div>
      {tags &&
        tags.map((tag) => {
          return (
            <Tag theme={theme} key={tag}>
              <Link to={`/tags/${toKebabCase(tag)}`}>{tag}</Link>
            </Tag>
          );
        })}
    </div>
  );
};

export default Tags;