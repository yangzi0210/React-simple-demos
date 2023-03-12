class ProductCategoryRow extends React.Component{
    render(){
        const category = this.props.category;
        return (
            <tr>
                <th colSpan='2'>
                    {category}
                </th>
            </tr>
        );
    }
}

class ProductRow extends React.Component {
    render() {
      const product = this.props.product;
      const name = product.stocked ?
        product.name :
        <span style={{color: 'red'}}>
          {product.name}
        </span>;
  
      return (
        <tr>
          <td>{name}</td>
          <td>{product.price}</td>
        </tr>
      );
    }
  }

class ProductTable extends React.Component{
    render(){
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        const rows= [];
        let lastCategory = null;
        this.props.product.forEach(element => {
            
        });
    }
}