import SearchComponent from 'components/search';
import { connect } from 'react-redux';
import { fetchPackage, updateSearch, clearNodes } from 'actions/actions';

const mapStateToProps = (state, ownProps) => ({
  search: state.search,
  ...ownProps,
});

const mapDispatchToProps = dispatch => ({
  fetchPackage: name => dispatch(fetchPackage(name)),
  updateSearch: search => dispatch(updateSearch(search)),
  clearNodes: () => dispatch(clearNodes()),
});

const SearchContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(SearchComponent);

export default SearchContainer;

