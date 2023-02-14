import React from 'react';

interface TagProps {
  children: React.ReactNode;
  tag: string;
}

const Tag: React.FC<TagProps> = ({ children, tag }) => {
  return (
    <span>
      <span className="tag">{`<${tag}>`}</span>
      {children}
      <span className="tag">{`</${tag}>`}</span>
    </span>
  );
};

export default Tag;
