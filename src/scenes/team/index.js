import React, { useState } from 'react';
import { Box } from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import TeamCollaborador from './TeamCollaborador';
import NewUser from '../team/NewUser/newUser'

import Header from '../../components/Header';

import UIButton from './Button/Button';

const Team = () => {
  let [isNewCollaborador, setIsCollaborador] = useState(true);

  function verificationChange() {
    return setIsCollaborador(!isNewCollaborador);
  }

  if (isNewCollaborador) {
    return (
      <Box m="20px">
        <Header title="System Manage" subtitle="List of Collaborators" />{' '}
        <UIButton verificationChange={verificationChange} />
        <TeamCollaborador />
      </Box>
    );
  } else {
    return (
      <NewUser />
      
    );
  }
};

export default Team;
