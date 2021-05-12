import { h, Component } from 'preact';

class NodeInfo extends Component {
  constructor(props){
    super(props);
  }

  render(){
    const { node } = this.props;
    const data = node.data();
    const { family_name } = data;

    const country = data.birth_country;
    const hasCountry = country != null;
    const url = data.reference;
    const race = data.race;
    const hasRace = race != null;
    const gender = data.gender;
    const name = data.name;
    const birthyr = data.birth_year;
    const deathyr = data.death_year;

    return h('div', { class: 'node-info' }, [
      h('div', { class: 'node-info-name' }, name),
      hasCountry ? h('div', { class: 'node-info-country' }, country) : null,
      hasRace ? h('div', { class: 'node-info-more' }, race) : null,
      h('div', { class: 'node-info-more' }, gender),
      h('div', { class: 'node-info-more' }, [
        h('a', { target: '_blank', href: `${url}` }, 'More information')
      ])
    ]);
  }
}

export default NodeInfo;
export { NodeInfo };