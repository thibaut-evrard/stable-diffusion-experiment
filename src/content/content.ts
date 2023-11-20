export interface IMedalContent {
    title: string;
    texture: string;
    thumbnail: string;
    depthmap: string;
}

type TMedals = IMedalContent[];

export const medals: TMedals = [
    {
        title: 'Jump the Gate',
        thumbnail: process.env.PUBLIC_URL + '/assets/maps/thumbnail/jump.png',
        texture: process.env.PUBLIC_URL + '/assets/maps/colour/jump.jpg',
        depthmap: process.env.PUBLIC_URL + '/assets/maps/depth/jump.jpg',
    },
    {
        title: 'Mind the Gap',
        thumbnail: process.env.PUBLIC_URL + '/assets/maps/thumbnail/gap.png',
        texture: process.env.PUBLIC_URL + '/assets/maps/colour/gap.jpg',
        depthmap: process.env.PUBLIC_URL + '/assets/maps/depth/gap.jpg',
    },
    {
        title: 'Netflix Time',
        thumbnail:
            process.env.PUBLIC_URL + '/assets/maps/thumbnail/netflix.png',
        texture: process.env.PUBLIC_URL + '/assets/maps/colour/netflix.jpg',
        depthmap: process.env.PUBLIC_URL + '/assets/maps/depth/netflix.jpg',
    },
    {
        title: 'Catch the Train',
        thumbnail: process.env.PUBLIC_URL + '/assets/maps/thumbnail/run.png',
        texture: process.env.PUBLIC_URL + '/assets/maps/colour/run.jpg',
        depthmap: process.env.PUBLIC_URL + '/assets/maps/depth/run.jpg',
    },
];
