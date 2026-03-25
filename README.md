# ERP Frontend - Sistema Profissional

## Estrutura de Pastas

```
src/
├── styles/                 # Arquivos CSS organizados
│   ├── global.css          # Estilos globais e variáveis
│   ├── Login.css           # Estilos específicos da página de login
│   ├── Layout.css          # Estilos do layout principal
│   ├── Dashboard.css       # Estilos do dashboard
│   ├── Pages.css           # Estilos para páginas de listagem
│   └── Components.css     # Estilos para componentes reutilizáveis
├── components/            # Componentes reutilizáveis
│   ├── Layout.js          # Layout principal com header e sidebar
│   ├── Button.js          # Botão customizável
│   ├── Card.js            # Card genérico
│   ├── Table.js           # Tabela responsiva
│   └── StatusBadge.js     # Badge de status
├── pages/                # Páginas da aplicação
│   ├── Login.js           # Página de login
│   ├── Dashboard.js        # Dashboard principal
│   ├── Vendas.js         # Página de vendas
│   ├── Clientes.js        # Página de clientes
│   ├── Produtos.js        # Página de produtos
│   ├── Pedidos.js         # Página de pedidos
│   ├── Relatorios.js      # Página de relatórios
│   └── Configuracoes.js   # Página de configurações
├── services/             # Serviços de API
│   └── authService.js     # Serviço de autenticação
└── App.js               # Componente principal com rotas
```

## Sistema de Estilos

### CSS Modular
- **global.css**: Variáveis CSS, estilos globais e utilitários
- **Componentes específicos**: Cada página/componente tem seu próprio CSS
- **Design System**: Cores, espaçamentos e bordas padronizadas

### Variáveis CSS
```css
:root {
  --primary-color: #0d6efd;
  --secondary-color: #6c757d;
  --success-color: #198754;
  --danger-color: #dc3545;
  --warning-color: #ffc107;
  --info-color: #0dcaf0;
  --light-color: #f8f9fa;
  --dark-color: #212529;
}
```

## Componentes Reutilizáveis

### Button
```javascript
<Button 
  variant="primary" 
  size="large" 
  icon="➕"
  onClick={handleClick}
>
  Novo Item
</Button>
```

### Card
```javascript
<Card 
  title="Título" 
  subtitle="Descrição"
  actions={<Button>Ação</Button>}
>
  Conteúdo do card
</Card>
```

### Table
```javascript
<Table 
  headers={['ID', 'Nome', 'Status']}
  data={tableData}
  actions={(row, index) => (
    <Button size="small" icon="👁️" />
  )}
/>
```

### StatusBadge
```javascript
<StatusBadge 
  status="Ativo" 
  type="success"
  size="medium"
/>
```

## Responsividade

- **Mobile-first**: Design otimizado para dispositivos móveis
- **Breakpoints**: 768px (tablet), 992px (desktop)
- **Grid System**: CSS Grid para layouts flexíveis
- **Sidebar colapsável**: Menu responsivo em dispositivos móveis

## Scripts Disponíveis

### `npm start`
Inicia a aplicação em modo de desenvolvimento.
Abra [http://localhost:3000](http://localhost:3000) para visualizar no navegador.

### `npm test`
Inicia o executor de testes em modo interativo.

### `npm run build`
Compila a aplicação para produção na pasta `build`.
Otimiza o bundle para melhor performance.

### `npm run eject`
**Nota: esta é uma operação de mão única.**
Remove a dependência de build e copia todos os arquivos de configuração para o projeto.

## Fluxo de Desenvolvimento

1. **Criar componente**: Em `src/components/`
2. **Adicionar estilos**: Em `src/styles/Components.css`
3. **Importar estilos**: No componente específico
4. **Testar responsividade**: Em diferentes tamanhos de tela
5. **Documentar**: Atualizar este README

## Características Implementadas

- **CSS Modular**: Separação completa de estilos
- **Componentes Reutilizáveis**: Botões, cards, tabelas
- **Design System**: Cores e espaçamentos padronizados
- **Responsividade**: Mobile-first approach
- **Acessibilidade**: HTML semântico e ARIA labels
- **Performance**: CSS otimizado e sem redundâncias
- **Navegação**: Sidebar funcional e responsiva
- **Temas**: Variáveis CSS para fácil customização

## Tecnologias Utilizadas

- **React 19**: Framework JavaScript
- **React Router**: Navegação client-side
- **CSS3**: Estilos modernos com variáveis
- **CSS Grid**: Layouts responsivos
- **JavaScript ES6+**: Sintaxe moderna

## Próximos Passos

- [ ] Adicionar testes unitários
- [ ] Implementar tema dark/light
- [ ] Otimizar performance
- [ ] Adicionar animações
- [ ] Implementar internacionalização
- [ ] Adicionar documentação de API
