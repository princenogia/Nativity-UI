
export const examples = [
    {
        id: "todo-app",
        name: "Todo App",
        description: "A beautiful task management app with categories, priorities, and smooth animations.",
        difficulty: "Beginner",
        components: ["Button", "Input", "Checkbox", "Card", "Modal"],
        code: `import React, { useState } from 'react';
import { View,  FlatList, StyleSheet } from 'react-native';
import { Button, Input, Checkbox, Card, Text } from '@/components/ui';

export default function TodoApp() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Buy groceries', completed: false, category: 'Personal' },
    { id: '2', title: 'Finish project', completed: true, category: 'Work' },
  ]);
  const [newTask, setNewTask] = useState('');

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { 
      id: Date.now().toString(), 
      title: newTask, 
      completed: false, 
      category: 'Personal' 
    }]);
    setNewTask('');
  };

  const toggleTask = (id: string) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>My Tasks</Text>
      
      <View style={styles.inputContainer}>
        <Input 
          value={newTask} 
          onChangeText={setNewTask}
          placeholder="Add a new task..."
          style={styles.input}
        />
        <Button onPress={addTask}>Add</Button>
      </View>

      <FlatList
        data={tasks}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.card}>
            <View style={styles.taskRow}>
              <Checkbox 
                checked={item.completed} 
                onCheckedChange={() => toggleTask(item.id)} 
              />
              <View style={styles.taskInfo}>
                <Text style={[
                  styles.taskTitle, 
                  item.completed && styles.completed
                ]}>
                  {item.title}
                </Text>
                <Text style={styles.taskCategory}>{item.category}</Text>
              </View>
            </View>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  inputContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 24,
  },
  input: {
    flex: 1,
  },
  card: {
    marginBottom: 12,
    padding: 16,
  },
  taskRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  taskInfo: {
    flex: 1,
  },
  taskTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  completed: {
    textDecorationLine: 'line-through',
    opacity: 0.6,
  },
  taskCategory: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});`
    },
    {
        id: "ecommerce",
        name: "E-commerce App",
        description: "Full-featured shopping app with product listings, cart, and checkout flow.",
        difficulty: "Intermediate",
        components: ["Card", "Button", "Badge", "Modal", "Tabs"],
        code: `import React, { useState } from 'react';
import { View, FlatList, Image, StyleSheet, ScrollView } from 'react-native';
import { Button, Card, Text, Badge, Tabs } from '@/components/ui';

const PRODUCTS = [
  { id: '1', name: 'Wireless Headphones', price: 199, category: 'Electronics', image: 'https://via.placeholder.com/150' },
  { id: '2', name: 'Running Shoes', price: 89, category: 'Sports', image: 'https://via.placeholder.com/150' },
  { id: '3', name: 'Smart Watch', price: 299, category: 'Electronics', image: 'https://via.placeholder.com/150' },
];

export default function EcommerceApp() {
  const [cart, setCart] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState('shop');

  const addToCart = (id: string) => setCart([...cart, id]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Store</Text>
        <Badge variant="outline">{cart.length} items</Badge>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categories}>
        <Button variant="secondary" size="sm" style={styles.categoryChip}>All</Button>
        <Button variant="ghost" size="sm" style={styles.categoryChip}>Electronics</Button>
        <Button variant="ghost" size="sm" style={styles.categoryChip}>Sports</Button>
        <Button variant="ghost" size="sm" style={styles.categoryChip}>Fashion</Button>
      </ScrollView>

      <FlatList
        data={PRODUCTS}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <Card style={styles.productCard}>
            <View style={styles.imagePlaceholder} />
            <Text style={styles.productName}>{item.name}</Text>
            <Text style={styles.productPrice}>$ {item.price}</Text>
            <Button 
              size="sm" 
              style={styles.addButton}
              onPress={() => addToCart(item.id)}
            >
              Add to Cart
            </Button>
          </Card>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#f8f9fa',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  categories: {
    flexGrow: 0,
    marginBottom: 20,
  },
  categoryChip: {
    marginRight: 8,
  },
  row: {
    gap: 12,
  },
  productCard: {
    flex: 1,
    padding: 12,
    marginBottom: 12,
  },
  imagePlaceholder: {
    width: '100%',
    height: 120,
    backgroundColor: '#eee',
    borderRadius: 8,
    marginBottom: 12,
  },
  productName: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 4,
  },
  productPrice: {
    fontSize: 14,
    color: '#666',
    marginBottom: 12,
  },
  addButton: {
    width: '100%',
  },
});`
    },
    {
        id: "social-app",
        name: "Social Media App",
        description: "Social networking layout with feed, stories, and profiles.",
        difficulty: "Advanced",
        components: ["Avatar", "Card", "Input", "Skeleton"],
        code: `import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Avatar, Text, Button, Input } from '@/components/ui';

const POSTS = [
  { id: '1', user: 'Sarah Doe', handle: '@sarah', content: 'Just launched my new portfolio! 🚀', likes: 24, comments: 5 },
  { id: '2', user: 'Alex Smith', handle: '@alex', content: 'Beautiful sunset today.', likes: 156, comments: 12 },
];

export default function SocialApp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Avatar fallback="ME" />
        <Text style={styles.headerTitle}>Feed</Text>
        <Button variant="ghost" size="icon">🔔</Button>
      </View>

      <ScrollView>
        {/* Stories */}
        <ScrollView horizontal style={styles.stories} showsHorizontalScrollIndicator={false}>
          {[1,2,3,4,5].map(i => (
            <View key={i} style={styles.storyItem}>
              <Avatar fallback={\`U\${i}\`} size="lg" style={styles.storyAvatar} />
              <Text style={styles.storyName}>User {i}</Text>
            </View>
          ))}
        </ScrollView>

        {/* Compose */}
        <Card style={styles.composeCard}>
          <View style={styles.composeRow}>
            <Avatar fallback="ME" size="sm" />
            <Input placeholder="What's happening?" style={styles.composeInput} />
          </View>
          <View style={styles.composeActions}>
            <Button size="sm">Post</Button>
          </View>
        </Card>

        {/* Feed */}
        {POSTS.map(post => (
          <Card key={post.id} style={styles.postCard}>
            <View style={styles.postHeader}>
              <Avatar fallback={post.user[0]} />
              <View>
                <Text style={styles.userName}>{post.user}</Text>
                <Text style={styles.userHandle}>{post.handle}</Text>
              </View>
            </View>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postActions}>
              <Button variant="ghost" size="sm">❤️ {post.likes}</Button>
              <Button variant="ghost" size="sm">💬 {post.comments}</Button>
              <Button variant="ghost" size="sm">Share</Button>
            </View>
          </Card>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    marginTop: 40,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  stories: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  storyItem: {
    alignItems: 'center',
    marginRight: 16,
  },
  storyAvatar: {
    borderWidth: 2,
    borderColor: '#8B5CF6',
  },
  storyName: {
    fontSize: 12,
    marginTop: 4,
  },
  composeCard: {
    margin: 16,
    padding: 16,
  },
  composeRow: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  composeInput: {
    flex: 1,
    borderWidth: 0,
    backgroundColor: '#f8f9fa',
  },
  composeActions: {
    alignItems: 'flex-end',
  },
  postCard: {
    marginHorizontal: 16,
    marginBottom: 16,
    padding: 16,
  },
  postHeader: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 12,
  },
  userName: {
    fontWeight: '600',
  },
  userHandle: {
    color: '#666',
    fontSize: 12,
  },
  postContent: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 16,
  },
  postActions: {
    flexDirection: 'row',
    gap: 16,
    borderTopWidth: 1,
    borderTopColor: '#f0f0f0',
    paddingTop: 12,
  },
});`
    },
    {
        id: "finance-app",
        name: "Finance Dashboard",
        description: "Banking interface with transaction list and spending overview.",
        difficulty: "Advanced",
        components: ["Card", "Badge", "Progress"],
        code: `import React from 'react';
import { View, ScrollView, StyleSheet } from 'react-native';
import { Card, Text, Badge, Progress, Button } from '@/components/ui';

const TRANSACTIONS = [
  { id: '1', title: 'Apple Store', amount: -1299.00, date: 'Today', type: 'expense' },
  { id: '2', title: 'Salary Deposit', amount: 4500.00, date: 'Yesterday', type: 'income' },
  { id: '3', title: 'Uber', amount: -24.50, date: 'Yesterday', type: 'expense' },
];

export default function FinanceApp() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.greeting}>Welcome back,</Text>
          <Text style={styles.name}>Alex Johnson</Text>
        </View>
        <Avatar fallback="AJ" />
      </View>

      <Card style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Total Balance</Text>
        <Text style={styles.balanceAmount}>$12,450.00</Text>
        <View style={styles.balanceActions}>
          <Button variant="secondary" size="sm">Top Up</Button>
          <Button variant="secondary" size="sm">Transfer</Button>
        </View>
      </Card>

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Monthly Budget</Text>
          <Card style={styles.budgetCard}>
            <View style={styles.budgetHeader}>
              <Text>Spent</Text>
              <Text style={styles.bold}>$1,250 / $3,000</Text>
            </View>
            <Progress value={45} style={styles.progressBar} />
          </Card>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
          {TRANSACTIONS.map(tx => (
            <Card key={tx.id} style={styles.txCard}>
              <View style={styles.txIcon}>
                <Text>{tx.type === 'income' ? '↓' : '↑'}</Text>
              </View>
              <View style={styles.txInfo}>
                <Text style={styles.txTitle}>{tx.title}</Text>
                <Text style={styles.txDate}>{tx.date}</Text>
              </View>
              <Text style={[
                styles.txAmount,
                tx.type === 'income' ? styles.income : styles.expense
              ]}>
                {tx.amount > 0 ? '+' : ''}{tx.amount.toFixed(2)}
              </Text>
            </Card>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0F',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    marginTop: 40,
  },
  greeting: {
    color: '#888',
  },
  name: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  balanceCard: {
    margin: 24,
    marginTop: 0,
    backgroundColor: '#6366f1',
    padding: 24,
    borderWidth: 0,
  },
  balanceLabel: {
    color: 'rgba(255,255,255,0.7)',
  },
  balanceAmount: {
    color: '#fff',
    fontSize: 32,
    fontWeight: 'bold',
    marginVertical: 8,
  },
  balanceActions: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
  },
  content: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    padding: 24,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  budgetCard: {
    padding: 16,
  },
  budgetHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
  },
  bold: {
    fontWeight: '600',
  },
  progressBar: {
    height: 8,
  },
  txCard: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 12,
  },
  txIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 12,
  },
  txInfo: {
    flex: 1,
  },
  txTitle: {
    fontWeight: '500',
  },
  txDate: {
    fontSize: 12,
    color: '#888',
  },
  txAmount: {
    fontWeight: '600',
  },
  income: {
    color: '#10B981',
  },
  expense: {
    color: '#111827',
  },
});`
    }
];
