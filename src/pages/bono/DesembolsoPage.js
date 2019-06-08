import PropTypes from 'prop-types';
import React, { Component } from 'react';
import MainSection from '../../components/MainSection';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';

class DesembolsoPage extends Component {

  render() {
    return (
      <ContentWrapper>
        <PageTitle>Desembolso</PageTitle>
        <MainSection />
      </ContentWrapper>
    );
  }
}

export default DesembolsoPage