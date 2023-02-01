import React from "react";
import { render } from "@testing-library/react";
import SearchForm from "../../components/SearchForm";

describe('SearchForm', () => {
    const emptyFunc = () => {};

    it('renders correctly', () => {
        const { asFragment } = render(
            <SearchForm searchText=""
            setSearchText={emptyFunc}
            onSubmit={emptyFunc}/>
        );
        expect(asFragment()).toMatchSnapshot();
    });

    it('renders the correct button text', () => {
        const { getByTestId } = render(
            <SearchForm searchText=""
            setSearchText={emptyFunc}
            onSubmit={emptyFunc}/>
        );
        expect(getByTestId('search__btn')).toHaveTextContent('Search');
    });
});