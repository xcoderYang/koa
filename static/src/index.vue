/*
 * @Author: yxcoder 
 * @Date: 2018-12-26 09:29:40 
 * @Last Modified by: yxcoder
 * @Last Modified time: 2019-11-15 16:59:01
 */
  <template>
    <div id="content">
      <el-row>
        <el-col :span="12">
          <div class="grid-content bg-purple">
            <pre>
这是 C++代码:

#include &lt;omnetpp.h>

using namespace omnetpp;

namespace fifo {

    class Switch : public cSimpleModule{
        private:
            cMessage *sendMessageEvent;
            int k = 0;
            int my_meth();
            int randomSend();
        public:
            int *qLength;
            Switch();
            virtual ~Switch();

        protected:
            simsignal_t dropSignal;
            int dropNum = 0;
            virtual void handleMessage(cMessage *msg) override;
            virtual void initialize() override;
    };

    Define_Module(Switch);

    void Switch::initialize() {
        dropSignal = registerSignal("drop");
        emit(dropSignal, dropNum);
    }

    Switch::Switch(){
        sendMessageEvent = nullptr;
        qLength = new int[3];

        qLength[0] = 0;
        qLength[1] = 0;
        qLength[2] = 0;

    }

    Switch::~Switch(){
        cancelAndDelete(sendMessageEvent);
        delete[] qLength;
    }

    void Switch::handleMessage(cMessage *msg){
        int port = 0;
        if (msg->getKind() == 2001) {
            port = my_meth();
            if (port == -1) {
                dropNum++;
                EV &lt;&lt; "queue is full. delete msg. dropNum is " &lt;&lt; dropNum &lt;&lt; endl;
                emit(dropSignal, dropNum);
                delete msg;
            } else {
                EV &lt;&lt; "send message to " &lt;&lt; port &lt;&lt; endl;
                send(msg, "out", port);
            }
        } else {
            if (msg->getArrivalGateId() == 1048577) {
                qLength[0] = msg->getKind();
            } else if (msg->getArrivalGateId() == 1048578) {
                qLength[1] = msg->getKind();
            } else {
                qLength[2] = msg->getKind();
            }
        }

    }

    int Switch::randomSend() {
        double q1Max = 300.0;
        double q2Max = 280.0;
        double q3Max = 250.0;

        if (k % 3 == 0) {
            k = 0;
        }
        if (k == 0 && qLength[0] >= q1Max) {
            k++;
            return -1;
        }
        if (k == 1 && qLength[1] >= q2Max) {
            k++;
            return -1;
        }
        if (k == 2 && qLength[2] >= q3Max) {
            k++;
            return -1;
        }

        return k++;
    }


    int Switch::my_meth() {
        double q1Max = 300.0;
        double q2Max = 280.0;
        double q3Max = 250.0;

        double q1 = qLength[0]*0.25*(qLength[0]*1.0/(qLength[0]+q1Max)*1.0);
        double q2 = qLength[1]*0.35*(qLength[1]*1.0/(qLength[1]+q2Max)*1.0);
        double q3 = qLength[2]*0.4*(qLength[2]*1.0/(qLength[2]+q3Max)*1.0);

        EV &lt;&lt; qLength[0] &lt;&lt; "-" &lt;&lt; qLength[1] &lt;&lt; "-" &lt;&lt; qLength[2] &lt;&lt; endl;
        EV &lt;&lt; q1 &lt;&lt; "-" &lt;&lt; q2 &lt;&lt; "-" &lt;&lt; q3 &lt;&lt; endl;

        if (qLength[0] &lt; q1Max && qLength[1] &lt; q2Max && qLength[2] &lt; q3Max) {
            if (q1 &lt;= q2 && q1 &lt;= q3) {
                return 0;
            } else if (q2 &lt;= q3) {
                return 1;
            } else {
                return 2;
            }
        } else if (qLength[0] >= q1Max && qLength[1] &lt; q2Max && qLength[2] &lt; q3Max) {
            if (q2 &lt;= q3) {
                return 1;
            } else {
                return 2;
            }
        } else if (qLength[1] >= q2Max && qLength[0] &lt; q1Max && qLength[2] &lt; q3Max) {
            if (q1 &lt;= q3) {
                return 0;
            } else {
                return 2;
            }
        } else if (qLength[0] &lt; q1Max && qLength[1] &lt; q2Max && qLength[2] >= q3Max) {
            if (q1 &lt;= q2) {
                return 0;
            } else {
                return 1;
            }
        } else if (qLength[0] >= q1Max && qLength[1] >= q2Max && qLength[2] &lt; q3Max) {
            return 2;
        } else if (qLength[0] >= q1Max && qLength[1] &lt; q2Max && qLength[2] >= q3Max) {
            return 1;
        } else if (qLength[0] &lt; q1Max && qLength[1] >= q2Max && qLength[2] >= q3Max) {
            return 0;
        }
        else {
            EV &lt;&lt; "queue 0-1-2 is full." &lt;&lt; endl;
            return -1;
        }

    }

};
            </pre>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="grid-content bg-purple-light">
            <pre>
这是 Java代码：

package Switch;

// import cPlus.simsignal_t;
// import cPlus.cSimpleModule;
// import cPlus.cMessage;
// import cPlus.registerSignal;


public class Switch extends cSimpleModule {

    public static int[] qLength;

    protected int dropNum = 0;
    protected simsignal_t dropSignal;
    
    private static cMessage sendMessageEvent;
    private int k=0;
    
    public static void Switch(){
        sendMessageEvent = null;
        qLength[0] = 0;
        qLength[1] = 0;
        qLength[2] = 0;
    };
    protected void handleMessage(cMessage msg){
        int port = 0;
        if (msg.getKind() == 2001) {
            port = my_meth();
            if (port == -1) {
                dropNum++;
                System.out.println("queue is full. delete msg. dropNum is "+dropNum);
                emit(dropSignal, dropNum);
            } else {
                System.out.println("send message to "+port);
                send(msg, "out", port);
            }
        } else {
            if (msg.getArrivalGateId() == 1048577) {
                qLength[0] = msg.getKind();
            } else if (msg.getArrivalGateId() == 1048578) {
                qLength[1] = msg.getKind();
            } else {
                qLength[2] = msg.getKind();
            }
        }
    }
    protected void initialize(){
        dropSignal = registerSignal("drop");
        emit(dropSignal, dropNum);
    }

    private int randomSend(){
        double q1Max = 300.0;
        double q2Max = 280.0;
        double q3Max = 250.0;

        if (k % 3 == 0) {
            k = 0;
        }
        if (k == 0 && qLength[0] >= q1Max) {
            k++;
            return -1;
        }
        if (k == 1 && qLength[1] >= q2Max) {
            k++;
            return -1;
        }
        if (k == 2 && qLength[2] >= q3Max) {
            k++;
            return -1;
        }

        return k++;
    }

    private int my_meth(){
        double q1Max = 300.0;
        double q2Max = 280.0;
        double q3Max = 250.0;

        double q1 = qLength[0]*0.25*(qLength[0]*1.0/(qLength[0]+q1Max)*1.0);
        double q2 = qLength[1]*0.35*(qLength[1]*1.0/(qLength[1]+q2Max)*1.0);
        double q3 = qLength[2]*0.4*(qLength[2]*1.0/(qLength[2]+q3Max)*1.0);

        System.out.println(qLength[0] + "-" + qLength[1] + "-" + qLength[2]);
        System.out.println(q1 + "-" + q2 + "-" + q3);

        if (qLength[0] &lt; q1Max && qLength[1] &lt; q2Max && qLength[2] &lt; q3Max) {
            if (q1 &lt;= q2 && q1 &lt;= q3) {
                return 0;
            } else if (q2 &lt;= q3) {
                return 1;
            } else {
                return 2;
            }
        } else if (qLength[0] >= q1Max && qLength[1] &lt; q2Max && qLength[2] &lt; q3Max) {
            if (q2 &lt;= q3) {
                return 1;
            } else {
                return 2;
            }
        } else if (qLength[1] >= q2Max && qLength[0] &lt; q1Max && qLength[2] &lt; q3Max) {
            if (q1 &lt;= q3) {
                return 0;
            } else {
                return 2;
            }
        } else if (qLength[0] &lt; q1Max && qLength[1] &lt; q2Max && qLength[2] >= q3Max) {
            if (q1 &lt;= q2) {
                return 0;
            } else {
                return 1;
            }
        } else if (qLength[0] >= q1Max && qLength[1] >= q2Max && qLength[2] &lt; q3Max) {
            return 2;
        } else if (qLength[0] >= q1Max && qLength[1] &lt; q2Max && qLength[2] >= q3Max) {
            return 1;
        } else if (qLength[0] &lt; q1Max && qLength[1] >= q2Max && qLength[2] >= q3Max) {
            return 0;
        }
        else {
            System.out.println("queue 0-1-2 is full.");
            return -1;
        }
    }

    
}
            </pre>
          </div>
        </el-col>
      </el-row>
    </div>
  </template>
  <script>
    import './style/noscope-global.styl';
    export default {
      data(){
        return{
          msg: 'Helsdlsso, World!',
          msg2: '123',
          account: '',
          password: ''
        }
      },
      methods:{
      },
      components:{
      }
    }
  </script>
  <style lang="stylus">
  #content
    pre
      font-size 18px
      font-weight bold
  </style>
  