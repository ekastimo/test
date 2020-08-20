import React from 'react';
import {render} from '@testing-library/react';
import {Search} from './Search';

describe('<Search />', () => {
    test('Make search on click', () => {
        /*
            todo

         */

        const onDelete = () => null
        const {getByText} = render(<Search onDelete={onDelete} data={data}/>);
        const linkElement = getByText(/Timothy Kasasa Beloved/i);
        expect(linkElement).toBeInTheDocument();
    });
});


