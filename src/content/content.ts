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
        thumbnail: '/assets/maps/thumbnail/jump.png',
        texture: '/assets/maps/colour/jump.jpg',
        depthmap: '/assets/maps/depth/jump.jpg',
    },
    {
        title: 'Mind the Gap',
        thumbnail: '/assets/maps/thumbnail/gap.png',
        texture: '/assets/maps/colour/gap.jpg',
        depthmap: '/assets/maps/depth/gap.jpg',
    },
    {
        title: 'Netflix Time',
        thumbnail: '/assets/maps/thumbnail/netflix.png',
        texture: '/assets/maps/colour/netflix.jpg',
        depthmap: '/assets/maps/depth/netflix.jpg',
    },
    {
        title: 'Catch the Train',
        thumbnail: '/assets/maps/thumbnail/run.png',
        texture: '/assets/maps/colour/run.jpg',
        depthmap: '/assets/maps/depth/run.jpg',
    },
];
