import React from 'react';
import 'jest-styled-components';
import renderWithTheme from '../../../../tests/hoc/shallowWithTheme';
import Typeahead from './Typeahead';

const schoolsLookup = async query => {
  const url = new URL('https://lookups.sls.comicrelief.com/schools/lookup');
  url.searchParams.set('query', query);
  const response = await fetch(url);
  const json = await response.json();
  return json.data.schools.map(school => school.name);
};

it('renders correctly', () => {
  const renderer = renderWithTheme(
    <Typeahead
      optionFetcher={schoolsLookup}
      onSelect={() => {}}
      id="typeahead-test"
      label="Typeahead test"
      name="q"
      placeholder="Type to start searching..."
      notFoundMessage="Sorry, we couldn't find anything"
    />
  );

  expect(renderer.toJSON()).toMatchSnapshot();
});
