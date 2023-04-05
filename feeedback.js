/*const FeedbackSection = {
  data() {
      return {
          feedback: {
              name: '',
              email: '',
              message: ''
          },
          feedbacks: []
      }
  },
  methods: {
      submitFeedback() {
          if (this.feedback.message.trim() !== '') {
              this.feedbacks.push(this.feedback);
          }
          this.feedback = {
              name: '',
              email: '',
              message: ''
          };
      }
  },
  template: `
      <div>
          <form>
              <div>
                  <label>Name:</label>
                  <<input v-model="feedback.name" type="text" required>
              </div>
              <div>
                  <label class="email">Email:</label>
                  <input v-model="feedback.email" type="email" required>
              </div>
              <div>
                  <label>Message:</label>
                  <textarea v-model="feedback.message" required></textarea>
              </div>
              <button @click.prevent="submitFeedback()" class="submit">Submit Feedback</button>
          </form>
          <div v-if="feedbacks.length > 0" class="comment">
              <h2>Feedbacks:</h2>
              <ul>
                  <li v-for="(feedback, index) in feedbacks" :key="index">
                      <p><strong>Name:</strong> <label> {{ feedback.name }}</label></p>
                      <p><strong>Email:</strong> <label>{{ feedback.email }}</label></p>
                      <p><strong>Message:</strong> <label>{{ feedback.message }}</label></p>
                  </li>
              </ul>
              <hr>
          </div>
      </div>
  `
};

Vue.createApp({components: {'feedback-section': FeedbackSection}}).mount('#app');*/

const FeedbackSection = {
    data() {
      return {
        feedback: {
          name: "",
          email: "",
          message: "",
        },
        feedbacks: [],
      };
    },
    methods: {
      submitFeedback() {
        if (this.feedback.message.trim() !== "") {
          this.feedbacks.push(this.feedback);
        }
        this.feedback = {
          name: "",
          email: "",
          message: "",
        };
      },
      clearFeedbacks() {
        this.feedbacks = [];
      },
    },
    template: `
      <div>
        <form>
          <div>
            <label>Name:</label>
            <input v-model="feedback.name" type="text" required>
          </div>
          <div>
            <label class="email">Email:</label>
            <input v-model="feedback.email" type="email" required>
          </div>
          <div>
            <label>Message:</label>
            <textarea v-model="feedback.message" required></textarea>
          </div>
          <button @click.prevent="submitFeedback()" class="submit">Submit Feedback</button>
          <button @click.prevent="clearFeedbacks()" class="clear">Clear</button>
        </form>
        <div v-if="feedbacks.length > 0" class="comment">
          <h2>Feedbacks:</h2>
          <ul>
            <li v-for="(feedback, index) in feedbacks" :key="index">
              <p><strong>Name:</strong> <label>{{ feedback.name }}</label></p>
              <p><strong>Email:</strong> <label>{{ feedback.email }}</label></p>
              <p><strong>Message:</strong> <label>{{ feedback.message }}</label></p>
            </li>
          </ul>
          <hr>
        </div>
      </div>
    `,
  };
  
  Vue.createApp({ components: { "feedback-section": FeedbackSection } }).mount(
    "#app"
  );
  