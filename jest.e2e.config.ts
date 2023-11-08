export default {
  moduleFileExtensions: ['js', 'json', 'ts'],
  testRegex: '.*\\.e2e-spec\\.ts$',
  transform: {
    '^.+\\.(t|j)s$': 'ts-jest',
  },
  collectCoverageFrom: ['**/*.(t|j)s'],
  coverageDirectory: '../coverage',
  testEnvironment: 'node',
};

// runInband is used to run the tests in the same thread

/**
 Este código é uma configuração para o Jest, uma biblioteca de testes em JavaScript, especificamente para testes de ponta a ponta (e2e).

moduleFileExtensions: Esta propriedade define as extensões de arquivo que o Jest irá considerar ao procurar arquivos de teste. Aqui, ele está configurado para procurar arquivos .js, .json e .ts.

testRegex: Esta propriedade define a expressão regular que o Jest usa para identificar arquivos de teste. Neste caso, ele está procurando por arquivos que terminam com .e2e-spec.ts.

transform: Esta propriedade é usada para especificar como os arquivos de teste devem ser transformados antes de serem executados. Aqui, ele está configurado para usar ts-jest para transformar arquivos .ts e .js.

collectCoverageFrom: Esta propriedade é usada para especificar de quais arquivos o Jest deve coletar informações de cobertura de código. Neste caso, ele está configurado para coletar de todos os arquivos .ts e .js.

coverageDirectory: Esta propriedade é usada para especificar o diretório onde o Jest deve colocar os relatórios de cobertura de código. Aqui, ele está configurado para colocar os relatórios no diretório ../coverage.

testEnvironment: Esta propriedade é usada para especificar o ambiente de teste. Neste caso, ele está configurado para node, o que significa que os testes serão executados em um ambiente Node.js.

O comentário no final indica que a opção runInBand é usada para executar os testes na mesma thread, mas essa opção não está presente na configuração mostrada.
 */
