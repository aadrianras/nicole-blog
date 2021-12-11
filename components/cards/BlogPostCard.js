/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';

import { container, title_s, sum_s, image, link_s } from './BlogPostCard.module.css';

const BlogPostCard = ({ title, summary }) => {
    return (
        <div className={container}>
            <h3 className={title_s}>{title}</h3>
            <p className={sum_s}>{summary}</p>
            <img className={image} src='/images/post.png' alt='alt' />
            <Link href='/'>
                <a className={link_s}>Leer artículo</a>
            </Link>
        </div>
    );
}

export default BlogPostCard;