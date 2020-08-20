import React from 'react';
import {render} from '@testing-library/react';
import {MyCard} from './Card';

describe('<MyCard />', () => {
    test('renders MyCard', () => {
        const data = {
            "login": "ekastimo",
            "id": 12415442,
            "avatar_url": "https://avatars2.githubusercontent.com/u/12415442?v=4",
            "type": "User",
            "name": "Timothy Kasasa Beloved",
            "company": "Laboremus Uganda",
            "bio": "I love Jesus, I code for fun and for work",
            "created_at": "2015-05-12T17:05:53Z"
        }
        const onDelete = () => null
        const {getByText} = render(<MyCard onDelete={onDelete} data={data}/>);
        const linkElement = getByText(/Timothy Kasasa Beloved/i);
        expect(linkElement).toBeInTheDocument();
    });
});


