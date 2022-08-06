// import SanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

const SanityClient = require('@sanity/client')
export const client = new SanityClient({
    projectId: 'qz1yguvc',
    dataset: 'production',
    apiVersion: '2022-07-30',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN
});
// export const client = sanityClient({
//     projectId: 'qz1yguvc',
//     dataset: 'production',
//     apiVersion: '2022-07-30',
//     userCdn: true,
//     token: process.env.NEXT_PUBLIC_SANITY_TOKEN
// });

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);