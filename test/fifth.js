function test() {
	let items = [
	  {
  	  name: 'shirt'
  	},
  	{
  	  name: 'trouser'
  	}
	]

	const add = (name) => {
	  const names = items.filter(item => item.name === name)
	  if (names.length === 0) {
	    items.push({name: name})
	  }
	}

	const remove = (name) => {
	  items = items.filter(item => item.name !== name)
	}

	const getList = () => {
	  console.log(items)
		return items
	}

  

	return {add, remove, getList}

}

document.write(test().getList());