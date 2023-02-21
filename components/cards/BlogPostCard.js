/* eslint-disable @next/next/no-img-element */
import { useEffect, useRef } from 'react';
import Link from 'next/link';

import { container, title_s, sum_s, image_link, image, link_s } from './BlogPostCard.module.css';

const BlogPostCard = ({ post }) => {
    const imageRef = useRef(null);
    const containerRef = useRef(null);

    useEffect(() => {
        if (imageRef && containerRef) {
            containerRef?.current?.addEventListener('mouseover', e => imageRef.current.style.marginLeft = '0');
            containerRef?.current?.addEventListener('mouseleave', e => imageRef.current.style.marginLeft = '2rem');
        };

        return () => {
            if (imageRef?.current) imageRef.current.removeEventListener('mouseover');
        };
    }, [imageRef, containerRef]);


    return (
        <div ref={containerRef} className={`${container} animate__animated animate__fadeIn`}>
            <h3 className={title_s}>{post.title}</h3>
            <p className={sum_s}>{post.summary}</p>
            <div className={image_link}>
                <img ref={imageRef} className={`${image} animate__animated animate__fadeIn`} src={post.coverImage} alt={post.title} />
                <Link href={`/blog/${post.metaTitle}`} className={link_s}>
                    Leer artículo
                </Link>
            </div>
        </div>
    );
}

export default BlogPostCard;