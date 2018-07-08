import React from 'react';
import { Text, View, FlatList, Image } from 'react-native';
import HTML from 'react-native-render-html';

export class Blog extends React.Component {
  constructor(props) {
    super(props);
    this.state = { blogLoaded: false };
  }

  componentDidMount() {
    return fetch(
      'https://public-api.wordpress.com/rest/v1.1/sites/test98603034.wordpress.com/posts'
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          blogLoaded: true,
          blogList: Array.from(responseJson.posts)
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  chooseBlog = blogID => {
    this.props.navigation.navigate('BlogDetailRT', {blogId: blogID});
  };

  render() {
    return (
      <View>
        {this.state.blogLoaded && (
          <View style={{ paddingTop: 40 }}>
            <FlatList
              data={this.state.blogList}
              keyExtractor={(item, index) => item.ID.toString()}
              renderItem={({ item }) => (
                <BlogItem
                  id={item.ID}
                  title={item.title}
                  imageSrc={item.featured_image}
                  excerpt={item.excerpt}
                  choosePost={this.chooseBlog}
                />
              )}
            />
          </View>
        )}

        {!this.state.blogLoaded && (
          <View style={{ paddingTop: 30 }}>
            <Text> Loading </Text>
          </View>
        )}
      </View>
    );
  }
}

export class BlogItem extends React.Component {
  blogChoice = () => {
    this.props.choosePost(this.props.id);
  };

  render() {
    const blogTagStyle = {
      img: { display: 'none' }
    };

    let blogItems = `
        <a href=${
          this.props.id
        } style="textDecorationLine: none; color: #000000; textAlign: center">
            <h1>${this.props.title}</h1>
            ${this.props.excerpt}
        </a>
        `;

    return (<View style={{borderBottomWidth: 2, borderBottomColor: '#000000', borderStyle: 'solid'}}>
        <Image style={{width: '100%', height: 200}} source={{uri: this.props.imageSrc}}/>
        <HTML tagsStyles={blogTagStyle} html={blogItems} onLinkPress={() => this.blogChoice()}/>
    </View>);
  }
}
