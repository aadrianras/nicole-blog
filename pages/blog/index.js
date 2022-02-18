/* eslint-disable @next/next/no-img-element */
import { ArticleJsonLd, NextSeo } from 'next-seo';
import { useState, useEffect } from 'react';
import BlogPostCard from '../../components/cards/BlogPostCard';

import { container, hero_c, summary, subtitle, content, categories_s, category_s, selected } from './index.module.css';

const index = ({ posts, categories }) => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [filteredPosts, setFilteredPosts] = useState(posts.filter(post => post.published));


    useEffect(() => setFilteredPosts(posts.filter(post => post.published).filter(post => !selectedCategory ? true : post.categories.some(category => category.name === selectedCategory))
    ), [selectedCategory]);


    return (
        <div className={container}>

            {/* BEST FOR FACEBOOK */}
            <NextSeo
                title="Fisioterapeuta Nicole Azurduy | Blog"
                description="Acompañanos leyendo alguno de los artículos escritos por la fisioterapeuta y kinesiologa Nicole Azurduy."
                canonical="https://www.nicoleazurduy.com/blog"
                openGraph={{
                    url: 'https://www.nicoleazurduy.com/blog',
                    title: 'Fisioterapeuta Nicole Azurduy | Blog',
                    description: 'Acompañanos leyendo alguno de los artículos escritos por la fisioterapeuta y kinesiologa Nicole Azurduy.',
                }}
            />

            {/* BEST FOR GOOGLE */}
            <ArticleJsonLd
                type="Blog"
                url="https://www.nicoleazurduy.com/blog"
                title="Fisioterapeuta Nicole Azurduy | Blog"
                images={['https://www.nicoleazurduy.com/images/website-card.jpg']}
                authorName="Blog de la fisioterapeuta Nicole Azurduy"
                description="En este espacio encontrarás diferentes artículos sobre evaluaciones simples para diagnosticar posibles problemas y sus causas, tratamientos que podrás realizarte tu mismo o a algún familiar que así lo requiera desde la comodidad de tu casa, además de algunos conceptos clínicos que te permitan aclarar algunas dudas."
            />

            <div className={hero_c}>
                <img src='/images/blog.jpg' alt='Blog picture' />
            </div>
            <p className={summary}>En este espacio encontrarás diferentes artículos sobre evaluaciones simples para diagnosticar posibles problemas y sus causas, tratamientos que podrás realizarte tu mismo o a algún familiar que así lo requiera desde la comodidad de tu casa, además de algunos conceptos clínicos que te permitan aclarar algunas dudas.</p>

            <h3 className={subtitle}>Categorias</h3>
            <div className={categories_s}>
                <p
                    className={!selectedCategory ? selected : category_s}
                    onClick={() => setSelectedCategory(null)}
                >
                    Todos
                </p>
                {categories.map((category) => (
                    <p
                        className={selectedCategory === category.name ? selected : category_s}
                        key={category.id}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        {
                            category.name.length <= 35
                                ? category.name
                                : category.name.slice(0, 35) + '...'
                        }
                    </p>
                ))}
            </div>

            <h3 className={subtitle}>Artículos</h3>
            <div className={content}>
                {filteredPosts.map(post => <BlogPostCard post={post} key={post.id} />)}
            </div>
        </div >
    );
};

export const getStaticProps = async (ctx) => {
    const res1 = await fetch(`${process.env.BASE_API_URL}/nicole-blog/post/all`);
    const posts = await res1.json();

    const res2 = await fetch(`${process.env.BASE_API_URL}/nicole-blog/category/all`);
    const categories = await res2.json();

    return {
        props: {
            posts: posts.posts,
            categories: categories.categories
        }
    }
}

export default index;