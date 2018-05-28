import React, { Component } from 'react'
import SearchBar from './search_bar'
import NavigationButtons from './navigation_buttons'

class SearchPaging extends Component {
    render() {
        return (
            <table className="combinedUi">
            <tbody>
              <tr>
                <td>
                  <SearchBar />
                </td>
                <td>
                  <NavigationButtons />
                </td>
              </tr>
            </tbody>
          </table>
        );
    };
}

export default SearchPaging;