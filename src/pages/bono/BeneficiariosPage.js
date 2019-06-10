import React, { Component } from 'react';
import ContentWrapper from '../../components/ContentWrapper';
import PageTitle from '../../components/PageTitle';
import Beneficiarios from '../../components/Urbarium/BeneficiariosSection';
import Input from '../../components/Urbarium/LabeledInput';
import DropdownGroup from '../../components/Urbarium/DropdownGroup';
import Label from '../../components/Urbarium/Label';
import { Row, Column } from '../../components/Structural/index';

class BeneficiariosPage extends Component {

  render() {
    const data = this.props.data
    return (
      <ContentWrapper>
        <PageTitle>{data.title}</PageTitle>
        <Column gap={2}>

          <Beneficiarios data={data.beneficiarios}/>

          <Column gap={1}>
            <Label>Dirección</Label>
            <DropdownGroup/>
            <Input type="textarea" placeholder="Dirección exacta" height="100px" fill data={data.direccion}/>
          </Column>

          <Row columns={3}>
            <Input type="textbox" label="Telefono" placeholder="0000 0000" data={data.telefono}/>
            <Input type="textbox" label="Celular" placeholder="0000 0000" data={data.cedula}/>
            {/* This below is ridiculous, gotta find a better way to align this*/ }
            <div style={{width: "190px"}}/>
          </Row>
        </Column>

      </ContentWrapper>
    );
  }
}

BeneficiariosPage.defaultProps = {
  data: {
    title: 'Beneficiarios',
    beneficiarios: [
      {
        cedula: '',
        nombre: '',
        primer_apellido: '',
        segundo_apellido: ''
      }
    ],
    provincia: '',
    canton: '',
    distrito: '',
    direccion: '',
    telefono: '',
    celular: '',
  }
}

export default BeneficiariosPage