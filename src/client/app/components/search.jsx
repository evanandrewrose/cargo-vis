import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'semantic-ui-react';

const SearchComponent = props => (
  <div>
    <Form>
      <Input
        style={{ margin: 0, padding: 0, width: '100%' }}
        onChange={event => props.updateSearch(event.target.value)}
      />
      <Button
        type="submit"
        fluid
        primary
        style={{ marginTop: '1em' }}
        onClick={() => {
          props.clearNodes();
          props.fetchPackage(props.search);
        }}
      >
        Search
      </Button>
    </Form>
  </div>
);

SearchComponent.propTypes = {
  search: PropTypes.string.isRequired,
  clearNodes: PropTypes.func.isRequired,
  updateSearch: PropTypes.func.isRequired,
  fetchPackage: PropTypes.func.isRequired,
};

export default SearchComponent;
