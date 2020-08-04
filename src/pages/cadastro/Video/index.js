import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import FormField from '../../../components/FormField';
import useForm from '../../../hooks/useForm';
import PageDefault from '../../../components/PageDefault';
import Button from '../../../components/Button';
import videosRepository from '../../../repositories/videos';

function CadastroVideo() {
  const history = useHistory();
  const { handleChange, values } = useForm({
    titulo: 'Vídeo padrão',
    url: 'https://www.youtube.com/watch?v=5PS6ku8NzIE',
    categoria: 'Front End',
  });

  return (
    <PageDefault>
      <h1>Cadastro de Vídeo</h1>

      <form
        onSubmit={(event) => {
          event.preventDefault();

          videosRepository.create({
            titulo: values.titulo,
            url: values.url,
            categoriaId: 1,
          })
            .then(() => {
              // eslint-disable-next-line no-console
              console.log('Vídeo cadastrado com sucesso');
              history.push('/');
            });
        }}
      >
        <FormField
          label="Título do Vídeo"
          name="titulo"
          value={values.titulo}
          onChange={handleChange}
        />

        <FormField
          label="URL do Vídeo"
          name="url"
          value={values.url}
          onChange={handleChange}
        />

        <FormField
          label="Categoria"
          name="categoria"
          value={values.categoria}
          onChange={handleChange}
        />

        <Button type="submit">
          Cadastrar
        </Button>
      </form>

      <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
