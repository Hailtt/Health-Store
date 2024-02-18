export const TAGS = [
  {
    title: 'Beverage',
    route: '/',
  },
  {
    title: 'Herbal Tea',
    route: '/',
  },
  {
    title: 'Hot Drink',
    route: '/',
  },
  {
    title: 'Tea Culture',
    route: '/',
  },
];

interface ICommentCardProps {
  avatar: string;
  comment: string;
  name: string;
  date: string;
  reply?: ICommentCardProps[];
}

export const COMMENTS: ICommentCardProps[] = [
  {
    avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
    name: 'Lâm',
    date: '14 thg 8, 2023',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
    reply: [
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Ronaldo',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Messi',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
    ],
  },
  {
    avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
    name: 'Hải',
    date: '14 thg 8, 2023',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
    reply: [
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Ronaldo',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Messi',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
    ],
  },
  {
    avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
    name: 'Hiếu',
    date: '14 thg 8, 2023',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
    reply: [
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Ronaldo',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Messi',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
    ],
  },
  {
    avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
    name: 'Mạnh',
    date: '14 thg 8, 2023',
    comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
    reply: [
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Ronaldo',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
      {
        avatar: 'https://secure.gravatar.com/avatar/64e1b8d34f425d19e1ee2ea7236d3028?s=50&d=mm&r=g',
        name: 'Messi',
        date: '14 thg 8, 2023',
        comment: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, pariatur.',
      },
    ],
  },
];
