import { ArticleJsonLd, NextSeo } from 'next-seo';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import validator from 'validator';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { faFacebookSquare, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { FacebookShareButton, WhatsappShareButton, } from "react-share";


import { container, title_c, line, title_s, share_summary, share_c, summary_s, content_s, image_c, icon, return_link } from './postMetaTitle.module.css';

const Post = ({ post }) => {
    const unescapedContent1 = validator.unescape(post.content1 || '');
    const unescapedContent2 = validator.unescape(post.content2 || '');

    const [baseUrl, setBaseUrl] = useState('');
    useEffect(() => typeof window !== 'undefined' ? setBaseUrl(window.location.host) : null, []);
    const router = useRouter();
    const shareUrl = `${baseUrl}${router.pathname}`;
    //There are the keywords for SEO
    const tags = [...post.metaTitle.split('-'), 'fisioterapia', 'fisioterapeuta', 'kinesiologa', 'kinesiologia'];

    return (
        <div className={container}>
            {/* BEST FOR FACEBOOK */}
            <NextSeo
                openGraph={{
                    title: `${post.title}`,
                    description: `${post.summary}`,
                    url: `https://www.nicoleazurduy.com/blog/${post.metaTitle}`,
                    type: 'article',
                    article: {
                        // section: 'Section II',
                        authors: ['Nicole Azurduy'],
                        tags: tags,
                    },
                    images: [
                        {
                            url: post.coverImage,
                            width: 720,
                            height: 405,
                            alt: post.title,
                        },
                    ],
                }}
            />
            {/* BEST FOR GOOGLE */}
            <ArticleJsonLd
                url={`https://www.nicoleazurduy.com/blog/${post.metaTitle}`}
                title={post.title}
                images={[post.coverImage]}
                // datePublished="2015-02-05T08:00:00+08:00"
                // dateModified="2015-02-05T09:00:00+08:00"
                authorName={['Fisioterapeuta Nicole Azurduy']}
                description={post.summary}
            />


            <div className={title_c}>
                <div className={line}></div>
                <h1 className={title_s}>{post.title}</h1>
            </div>

            <div className={share_summary}>
                <div className={share_c}>
                    <p>Comparte en</p>
                    <WhatsappShareButton url={shareUrl}>
                        <FontAwesomeIcon className={icon} icon={faWhatsapp} />
                    </WhatsappShareButton>
                    <FacebookShareButton url={shareUrl} >
                        <FontAwesomeIcon className={icon} icon={faFacebookSquare} />
                    </FacebookShareButton>
                </div>
                <p className={summary_s}>{post.summary}</p>
            </div>

            <div className={content_s} dangerouslySetInnerHTML={{ __html: unescapedContent1 }}></div>

            <div className={image_c}>
                <Image src={post.contentImage} alt={post.title} layout='responsive' width={600} height={338} />
            </div>

            <div className={content_s} dangerouslySetInnerHTML={{ __html: unescapedContent2 }}></div>

            <Link href='/blog'>
                <a className={return_link}>
                    <FontAwesomeIcon icon={faLongArrowAltLeft} />
                    Volver al blog
                </a>
            </Link>
        </div>
    );
}


export const getStaticPaths = async () => {

    const res = await fetch(`${process.env.BASE_API_URL}/nicole-blog/post/all`);
    const data = await res.json();

    return {
        paths: data.posts.map(post => ({ params: { postMetaTitle: post.metaTitle } })),
        fallback: false // false or 'blocking'
    };
}

export const getStaticProps = async ({ params }) => {
    const res = await fetch(`${process.env.BASE_API_URL}/nicole-blog/post/metatitle/${params.postMetaTitle}`);
    if (!res || res.status != 200) return { redirect: { destination: '/blog' } };
    const data = await res.json();

    return {
        props: {
            post: data.post
        }
    }
}

export default Post;