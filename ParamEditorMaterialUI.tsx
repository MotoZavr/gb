import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

// Определение типов
interface Param {
  id: number;
  name: string;
  type: 'string';
}

interface ParamValue {
  paramId: number;
  value: string;
}

interface Model {
  paramValues: ParamValue[];
}

interface Props {
  params: Param[];
  model: Model;
}

interface State {
  paramValues: ParamValue[];
}

// Стили компонента
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

// Компонент для редактирования параметров
const ParamEditor: React.FC<Props> = ({ params, model }) => {
  const classes = useStyles();
  const [paramValues, setParamValues] = React.useState<ParamValue[]>(model.paramValues);

  // Обработчик изменения значения параметра
  const handleParamChange = (paramId: number, value: string) => {
    const updatedParamValues = paramValues.map(paramValue => {
      if (paramValue.paramId === paramId) {
        return { ...paramValue, value };
      }
      return paramValue;
    });
    setParamValues(updatedParamValues);
  };

  // Метод для получения полной структуры модели
  const getModel = (): Model => {
    return { paramValues };
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {params.map(param => (
          <Grid item xs={12} sm={6} key={param.id}>
            <TextField
              id={`param-${param.id}`}
              label={param.name}
              variant="outlined"
              fullWidth
              value={paramValues.find(p => p.paramId === param.id)?.value || ''}
              onChange={e => handleParamChange(param.id, e.target.value)}
            />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default ParamEditor;
